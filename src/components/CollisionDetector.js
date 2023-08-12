import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Shake from 'shake.js';
import Waves from './WavesBottom'
import d3 from '../lib/d3';

// Collision Detector by Mike Bostock
// https://bl.ocks.org/mbostock/3231307

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#263238',
    backgroundImage: `linear-gradient(-74deg, #23afba 0%, #298dbf 50%, #306bc4 100%)`,

    '& canvas': {
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      top: 0,
      left: 0,
    },
  },
  textContainer: {
    zIndex: 10,
    fontSize: '1.25em',
    fontWeight: 'normal',
    textAlign: 'center',
    userSelect: 'none',
    color: '#fff',
  }
}))

const CollisionDetector = function (props) {
  let classes = useStyles()

  useEffect(() => {
    var container = document.getElementById('collision-detector')
    var width = container.clientWidth,
        height = container.clientHeight;

    // Create nodes of various sizes
    var nodes = d3.range(1).map(() =>  ({ radius: Math.random() * 12 + 4 })),
        root = nodes[0],
        colors = ['#ff8a80', '#ff80ab', '#ea80fc', '#b388ff', '#8c9eff', '#82b1ff', '#80d8ff', '#84ffff', '#a7ffeb', '#b9f6ca', '#ccff90', '#f4ff81', '#ffff8d', '#ffe57f', '#ffd180', '#ff9e80'];

    // Alter one node (root) to repel all (index = 0)
    root.radius = 0;
    root.fixed = true;
    root.px = width / 2;
    root.py = height / 2;

    var force = d3.layout.force()
        .gravity(0.015)
        .charge((d, i) => i ? 0 : -2000)
        .nodes(nodes)
        .size([width, height]);

    force.start();

    var canvas = d3.select("#collision-detector").append("canvas")
        .attr("width", width)
        .attr("height", height)

    window.addEventListener('resize', function () {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.attr("width", width).attr("height", height);
      force.tick();
    });

    var context = canvas.node().getContext("2d");

    force.on("tick", function(e) {
      var q = d3.geom.quadtree(nodes),
          i,
          d,
          n = nodes.length;

      for (i = 1; i < n; ++i) q.visit(collide(nodes[i]));

      context.clearRect(0, 0, width, height);
      force.size([width, height]);
      for (i = 1; i < n; ++i) {
        context.fillStyle = colors[i % colors.length];
        d = nodes[i];
        context.moveTo(d.x, d.y);
        context.beginPath();
        context.arc(d.x, d.y, d.radius, 0, 2 * Math.PI);
        context.fill();
      }
    });

    // Move the altered node's position match the mouse position
    document.querySelector('body').addEventListener('mousemove', event => {
      root.px = event.pageX;
      root.py = event.pageY;
      force.resume();
    })

    function collide(node) {
      var r = node.radius + 16,
          nx1 = node.x - r,
          nx2 = node.x + r,
          ny1 = node.y - r,
          ny2 = node.y + r;
      return function(quad, x1, y1, x2, y2) {
        if (quad.point && (quad.point !== node)) {
          var x = node.x - quad.point.x,
              y = node.y - quad.point.y,
              l = Math.sqrt(x * x + y * y),
              r = node.radius + quad.point.radius + 7;
          if (l < r) {
            l = (l - r) / l * .5;
            node.x -= x *= l;
            node.y -= y *= l;
            quad.point.x += x;
            quad.point.y += y;
          }
        }
        return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
      };
    }

    // Create Shake Event
    // const timeout = 3000

    // const shake = new Shake({
    //   threshold: 15,
    //   timeout
    // });

    // shake.start();

    // // Shake Event: Make balls go nuts!
    // window.addEventListener('shake', function () {
    //   root.px = window.innerWidth / 2;
    //   root.py = window.innerHeight / 2;

    //   force.gravity(0.2).start()

    //   setTimeout(() => force.gravity(0.015).start(), timeout)
    // }, false);


    let intervals = []
    let index = 0

    const removeNodes = () => {
      let iterate = ({ index }) => index && (index <= colors.length)
      let indexes = nodes.filter(iterate).map(({ index }) => index)

      let interval = setInterval(() => {
        nodes = nodes.map(node => {
          node.radius = node.radius * (indexes.includes(node.index) ? 0.95 : 1)

          return node
        })

        force.nodes(nodes).start()
      }, 50)

      setTimeout(() => {
        nodes = nodes.filter(({ index }) => {
          return !indexes.includes(index)
        })

        force.nodes(nodes).start()

        clearInterval(interval)
      }, 3000)
    }

    // Mousedown Event: Create balls
    let createNode = () => {
      index++

      nodes.push({
        index,
        radius: Math.random() * 12 + 4,
        x: root.x,
        y: root.y,
      });

      force.nodes(nodes).start();

      if (!(index % colors.length)) {
        removeNodes()
      }
    }

    window.addEventListener('mousedown', () => intervals.push(setInterval(createNode)))
    window.addEventListener('mouseup', () => intervals.forEach(clearInterval))

    window.addEventListener('touchstart', () => intervals.push(setInterval(createNode)))
    window.addEventListener('touchend', () => intervals.forEach(clearInterval))

    // Init with 300 balls
    d3.range(300).forEach(() => {
      setTimeout(() => {
        index++

        nodes.push({
          index,
          radius: Math.random() * 12 + 4,
          x: root.x,
          y: root.y,
        });

        force.nodes(nodes).start();
      }, index)
    })
  }, [])

  return (
    <div id="collision-detector" className={classes.root}>
      <div className={classes.textContainer}>
        <h1>Victerry</h1>
        <h2>✕</h2>
        <h2>Sydney, Australia</h2>
      </div>

      <Waves />
    </div>
  );

}

export default CollisionDetector;

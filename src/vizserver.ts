var http = require('http');
var fs = require('fs');

import { AST } from './ast';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import ejs from 'ejs';

export function visualizeAST(ast: AST): any {
  let nodes: AST[] = Array.from(ast.walkDescendants(true));
  let graphNodes = nodes.map((x, ix) => {
    return {
      id: ix,
    };
  });
}

const PORT = 8080;

fs.readFile(__dirname + '/template/viz.html.ejs', 'utf-8', function(
  err: any,
  template: any
) {
  if (err) throw err;

  let render = ejs.compile(template);

  http
    .createServer(function(request: any, response: any) {
      response.writeHeader(200, { 'Content-Type': 'text/html' });
      response.write(
        render({
          graphNodes: {},
          graphEdges: {},
        })
      );
      response.end();
    })
    .listen(PORT);
});

// Helper visualization functions

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

export function SystemDiagram() {
  return <div className="system-diagram" aria-label="Diagram showing business context, architecture, guardrails, automation, human judgment, observability, and auditability flowing into useful intelligence" role="img">
    <div className="diagram-grid" aria-hidden="true" /><div className="diagram-path path-a" aria-hidden="true" /><div className="diagram-path path-b" aria-hidden="true" />
    <span className="diagram-node node-a">Business context</span><span className="diagram-node node-b">Architecture</span><span className="diagram-node node-e">Guardrails</span><span className="diagram-node node-c">Automation</span><span className="diagram-node node-d">Human judgment</span><span className="diagram-node node-f">Observability / Auditability</span><div className="diagram-core">Useful<br />intelligence</div>
  </div>;
}

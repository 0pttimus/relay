const relaySystems = [
  ["USSD gateway", "Proprietary gateway planned by Relay"],
  ["Request processing", "Handling for supported interactions"],
  ["Wallet interaction", "Planned non-custodial workflows"],
];

export function ArchitectureDiagram() {
  return (
    <figure className="architecture-figure" aria-labelledby="architecture-heading" aria-describedby="architecture-caption">
      <figcaption className="architecture-heading">
        <strong id="architecture-heading">Proposed service flow</strong>
        <span>Pre-launch</span>
      </figcaption>
      <ol className="architecture-flow">
        <li className="architecture-step">
          <span className="architecture-number">01</span>
          <div className="architecture-step-copy"><strong>Mobile access</strong><small>Basic phone using a USSD session</small></div>
        </li>
        <li className="architecture-step">
          <span className="architecture-number">02</span>
          <div className="architecture-step-copy"><strong>Telecommunications network</strong><small>Mobile network connectivity carries the USSD session</small></div>
        </li>
        <li className="architecture-step architecture-relay">
          <span className="architecture-number">03</span>
          <div className="architecture-step-copy">
            <strong>Relay infrastructure</strong>
            <small>Planned systems under development</small>
            <ul className="architecture-subsystems">
              {relaySystems.map(([name, detail]) => <li key={name}><strong>{name}</strong><small>{detail}</small></li>)}
            </ul>
          </div>
        </li>
        <li className="architecture-step">
          <span className="architecture-number">04</span>
          <div className="architecture-step-copy"><strong>Solana</strong><small>Initial blockchain network</small></div>
        </li>
      </ol>
      <p className="architecture-caption" id="architecture-caption">This is Relay’s planned architecture, not an operational service. No direct telecom integration is claimed.</p>
    </figure>
  );
}

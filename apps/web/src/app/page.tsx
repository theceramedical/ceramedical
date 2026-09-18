import { ButtonLink } from '@cera/ui'

const deliveryAreas = [
  'Approved public content from Payload CMS',
  'Service catalogue data from Vendure',
  'Secure enquiry and customer status experience',
]

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">CERA Medical platform</p>
            <h1>Clear information. Secure enquiries. Human support.</h1>
            <p className="lede">
              This starter page proves the web application is running. Replace
              this content only after the approved Payload and Vendure contracts
              are connected.
            </p>
            <div className="actions">
              <ButtonLink href="/services">Explore services</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Make an enquiry
              </ButtonLink>
            </div>
          </div>
          <aside className="status-card" aria-label="Starter status">
            <h2>Starter baseline</h2>
            <ul>
              {deliveryAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}

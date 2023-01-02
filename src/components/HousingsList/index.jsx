import housingsData from '../../data/housingsList.json'
import '../../styles/HousingsList.css'

function Housingslist() {
  return (
    <section className="housings_section">
      {housingsData.map((housing) => (
        <div className="housing_card" key={housing.id}>
          <div className="housing_card__title">{housing.title}</div>
        </div>
      ))}
    </section>
  )
}

export default Housingslist

import React from 'react'

const DetailsReport = ({ setDetails, data }) => {
  const handleChange = (event) => {
    setDetails(prev => ({
      ...prev,
      details: event.target.value
    }))
  }
  return (
    <section className="flex gap-4 mt-5">
      <div className="flex items-start gap-2 min-w-96">
        <span className="mr-1">Details:</span>
        <textarea className='w-full ml-auto rounded-2xl p-3' value={data} onChange={handleChange}></textarea>
      </div>
    </section>
  )
}

export default DetailsReport
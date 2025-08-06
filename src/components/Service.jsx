
const Service = (props) => {
  return (
    <div className={`w-full mx-auto border-2 rounded-xl bg-gradient-to-br from-gray-950 to-gray-900`}>
        <div>
            <img src={props.image} alt="image" className={`h-40 w-full rounded-t-xl object-cover`} />
        </div>
        <div className={`mt-4 px-8 pb-8`}>
            <h3 className={`text-lg text-white font-bold`}>{props.title}</h3>
            <p className={`text-md text-gray-500`}>{props.description}</p>
        </div>
    </div>
  )
}

export default Service
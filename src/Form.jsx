const Form = () => {
    const handleSubmit = (event) => {
      // event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const quantity = form.quantity.value;
      const fruit = {name,quantity};
      console.log(fruit);
      fetch('http://localhost:5000/fruit',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(fruit),
      })
      .then(res=>res.json())
      .then(data=> console.log(data))
    }
  return (
    <div className="bg-blue-950 h-52 lg:w-1/2 w-full md:w-1/2 flex justify-center items-center ">
    <form onSubmit={handleSubmit} className=" flex flex-col">
    <div className="flex justify-between items-center">
        <div>
        <label className="text-white text-2xl my-4">Mango name: </label>
        </div>
        <div>
        <input className="w-72" type="text" name="name"/>
        </div>
    </div>
    <div className="flex justify-between items-center ">
        <div>
        <label className="text-white text-2xl my-4">Mango Quantity: </label>
        </div>
        <div>
        <input className="w-72" type="number" name="quantity"/>
        </div>
    </div>
      <div className="w-3/4 justify-center bg-pink-700 border-0 rounded-lg my-4 py-2 items-center mx-auto">
      <input type="submit"  className="text-white text-2xl font-bold"/>
      </div>     
  </form>
  </div>
  )
}

export default Form

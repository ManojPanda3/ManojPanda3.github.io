const Contact = () => {
  function handleContact() {

  }
  return (
    <section className="contact onscroll" id="contact">
      <h1>Contact </h1>
      <form onSubmit={handleContact}>
        <div><input type="text" /><input type="text" /></div>
        <input type="email" />
        <button type="submit" >Contact Me</button>
      </form>
    </section>
  )
}

export default Contact

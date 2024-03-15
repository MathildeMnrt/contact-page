import './index.css';

function App() {

  return (
    <>
      <div className='h-vh w-full bg-cover bg-center' style={{ backgroundImage: `url("./bg-image.svg")` }}>
        <header className='pt-[20px] pl-20'>
          <img
            src="./contact-form-icon.svg"
          />
        </header>
        <div className='flex flex-col items-center mx-auto'>

          <section className='mt-11 flex flex-col gap-4 items-center'>
            <h1 className='be-vietnam title text-center xl:text-[64px] leading-snug text-5xl'> Interested in our <br/> business pricing ? </h1>
            <h3 className='be-vietnam subtitle text-center text-[28px] xl:text-[32px]'>Fill out the form to view details and we’ll <br/> contact you as soon as possible.</h3>
          </section>

          <div className='backdrop-blur-sm bg-white/10 p-8 rounded-3xl my-12 min-w-[500px] md:w-[746px]'>
            <form className='flex flex-col gap-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-[18px]'>
                <div className='form-field'>
                  <label> Name </label>
                  <input type="text" name="name" placeholder='Ethan Johnson' />
                </div>

                <div className='form-field'>
                  <label>
                    Company Email
                  </label>
                  <input type="text" name="email" placeholder='ethan@johnson.com' />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='form-field'>
                  <label> Company Size </label>
                  <select id="company_size" name="company_size">
                    <option value="1_10">1 - 10 employees</option>
                    <option value="10_50">10 - 50 employees</option>
                    <option selected="selected" value="50_100">50 - 100 employees</option>
                    <option value="+100">+100 employees</option>
                  </select>
                </div>

                <div className='form-field'>
                  <label> Subject </label>
                  <select defaultValue={50-100} id="company_size" name="company_size">
                    <option value="1">Building Landing Page</option>
                    <option value="2">Option 2</option>
                  </select>
                </div>
              </div>

              <div className='form-field'>
                <label> Message </label>
                <textarea rows={6} className='' />
              </div>

              <button className='w-full bg-white rounded-xl h-14' type="submit">
                Contact Sales
              </button>
            </form>
          </div>

        </div>

      </div>
    </>
  )
}

export default App

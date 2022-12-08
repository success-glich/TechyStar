import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>

            <h1> Contact Us</h1>
            <form>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text"  placeholder='Abc' required />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email"  placeholder='Abc@xyz.com' required />
                </div>
                <div>
                    <label htmlFor="">Message</label>
                    <input type="text"  placeholder='Tell us about your query...' required />
                </div>
                <button type='submit'> Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact
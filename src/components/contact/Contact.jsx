import './contact.scss';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
        <div className="textContainer">
            <h1>Let&apos;s Work Together</h1>
            <div className="item">
                <h2>Mail</h2>
                <span>khaingthinzarthwe.dev@gmail.com</span>
            </div>
            <div className="item">
                <h2>Address</h2>
                <span>Nonthaburi, Thailand</span>
            </div>
        </div>
        <div className="formContainer">
            <form>
                <input type='text' required placeholder='Name' />
                <input type='email' required placeholder='Emaill' />
                <textarea rows={8} placeholder='Message' />
                <button>Submit</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Contact
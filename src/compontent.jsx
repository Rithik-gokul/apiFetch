

function Component(p) {
    return ( <div className="Main">
        <div>
        <img src={p.avatar} alt="pic" className='swim' />
        <p className="Name">{p.first_name} {p.last_name}</p>
        <p className="Email">{p.email}</p>
        </div>
        
    </div> );
}

export default Component;




import Head from 'next/head'
import { Profile } from "react"


const profile = () => {
    
    
    const { name,email,password, cf_password } = data
    return 
    <div className='profilePage'>
        <Head>
            <title>Profile</title>
        </Head>
        <section className="row text-secondary my-3">
        <div className="col-md-4">
            <h3 className='text-center text-uppercase'>
                User Profile
                </h3>
            
            <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={name} className="form-control"
                        placeholder="Your name" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" defaultValue={auth.user.email} 
                        className="form-control" disabled={true} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">New Password</label>
                        <input type="password" name="password" value={password} className="form-control"
                        placeholder="Your new password" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cf_password">Confirm New Password</label>
                        <input type="password" name="cf_password" value={cf_password} className="form-control"
                        placeholder="Confirm new password" onChange={handleChange} />
                    </div>

                    <button className="btn btn-info" disabled={notify.loading}
                    onClick={handleUpdateProfile}>
                        Update
                    </button>
                    </div>
        <div className="col-md-8">
            <h3>Orders</h3>

        </div>

        </section>
    </div>
}
export default Profile;
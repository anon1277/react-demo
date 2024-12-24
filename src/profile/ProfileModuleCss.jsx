import style from '../css/ProfileModuleCss.module.css'

const ProfileModuleCss = ()=>{

    return(
        <div>   
                {/* <div className={style.container}> */}
                    <h1>Module css demo</h1>
                    {/* Profile card  */}
                    <div className={style.profile_card}>
                            <div>
                                {/* Profile image */}
                                <img className={style.img} src="https://as2.ftcdn.net/v2/jpg/01/12/09/17/1000_F_112091769_vWEmDiwVIpO4H1plGuhYgnmduTuiGUh2.jpg" alt="Profile" />
                            </div>
                            <div className={style.text_wrap}>
                                {/* Profile name and position */}
                                <h1>Anon 1277</h1>
                                <p>Software Developer</p>
                            </div>
                    </div>
               {/* </div> */}
          </div>
    )

}

export default ProfileModuleCss;
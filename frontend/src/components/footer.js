import React from 'react';

class Footer extends React.Component
{
    constructor(props)
    {
        super(props);
    }


    render()
    {
        return(
            <div className = "footer">
                <center>
                    <p>
                        Copyright Aurélien GADBLET TD4A <br></br>
                        Projet WEB<br></br>
                        contact : aurelien.gadblet@hotmail.fr<br></br>
                    </p>
                </center>     
            </div>
         );
    }
}

export default Footer;
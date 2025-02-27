import Park from './Park'
import React from "react";

const Grid = () => {

  return (
    <div className="gridContainer">
        <table className = "parkCardsContainer">
            <tbody>
                <tr>
                    <Park parkName="Piedmont Park" parkLocation = " 1320 Monroe Dr NE, Atlanta, GA 30306" parkLink = "https://piedmontpark.org/"/>
                    <Park parkName="Centennial Olympic Park" parkLocation = "265 Park Ave W NW, Atlanta, GA 30313" parkLink = "https://www.gwcca.org/centennial-olympic-park"/>
                </tr>
                <tr>
                    <Park parkName="Grant Park" parkLocation = "840 Cherokee Ave SE, Atlanta, GA 30315" parkLink = "https://www.gpconservancy.org/"/>
                    <Park parkName="Historic Fourth Ward Park" parkLocation = "680 Dallas St NE, Atlanta, GA 30308" parkLink = "https://beltline.org/parks-trails/historic-fourth-ward-park/"/>
                </tr>
                <tr>
                    <Park parkName="Lullwater Park" parkLocation = "1463 Clifton Rd NE, Atlanta, GA 30322" parkLink = "https://www.atlantatrails.com/hiking-trails/lullwater-walking-running-trails-emory-university-atlanta/"/>
                    <Park parkName="Chastain Park" parkLocation = "4001 Powers Ferry Rd NW, Atlanta, GA 30342" parkLink = "https://www.chastainpark.org/"/>
                </tr>
                <tr>
                    <Park parkName="Freedom Park" parkLocation = "Moreland Ave NE, Atlanta, GA 30307" parkLink = "https://www.freedompark.org/"/>
                    <Park parkName="Candler Park" parkLocation = "585 Candler Park Dr NE, Atlanta, GA 30307" parkLink = "https://candlerpark.org/"/>
                </tr>
                <tr>
                    <Park parkName="Westside Reservoir Park" parkLocation = "1660 Johnson Rd NW, Atlanta, GA 30318" parkLink = "https://beltline.org/parks-trails/westside-park/"/>
                    <Park parkName="Blue Heron Nature Preserve" parkLocation = "4055 Roswell Rd NE, Atlanta, GA 30342" parkLink = "https://bhnp.org/"/>
                </tr>
            </tbody>
        </table>
      
    </div>
  )
}

export default Grid
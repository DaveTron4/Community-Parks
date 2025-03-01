import Park from './Park'
import React from "react";

const Grid = () => {

  return (
    <div className="gridContainer">
        <table className = "parkCardsContainer">
            <tbody>
                <tr>
                    <Park parkName="Piedmont Park" parkLocation = " 1320 Monroe Dr NE, Atlanta, GA 30306" parkLink = "https://piedmontpark.org/" parkImage = "https://www.voiceofgoizueta.com/wp-content/uploads/2018/04/GettyImages-613027536.jpg"/>
                    <Park parkName="Centennial Olympic Park" parkLocation = "265 Park Ave W NW, Atlanta, GA 30313" parkLink = "https://www.gwcca.org/centennial-olympic-park" parkImage = "https://www.atlantaparent.com/wp-content/uploads/2018/03/iStock-458689055.jpg"/>
                </tr>
                <tr>
                    <Park parkName="Grant Park" parkLocation = "840 Cherokee Ave SE, Atlanta, GA 30315" parkLink = "https://www.gpconservancy.org/" parkImage = "https://images.squarespace-cdn.com/content/v1/5a54eff9f43b55c572576f3c/1663869412946-M8QJ7F51V774Z2FUSFYZ/GrantPark468.jpg"/>
                    <Park parkName="Historic Fourth Ward Park" parkLocation = "680 Dallas St NE, Atlanta, GA 30308" parkLink = "https://beltline.org/parks-trails/historic-fourth-ward-park/" parkImage = "https://americas.uli.org/wp-content/uploads/2020/05/Historic4thWardPark_AtlantaGA_Image2-scaled.jpg"/>
                </tr>
                <tr>
                    <Park parkName="Lullwater Park" parkLocation = "1463 Clifton Rd NE, Atlanta, GA 30322" parkLink = "https://www.atlantatrails.com/hiking-trails/lullwater-walking-running-trails-emory-university-atlanta/" parkImage = "https://images.squarespace-cdn.com/content/v1/578a6dbf03596ee713630eea/1470091557811-1LJ43I94XRX9ZG1ZG4FA/lullwater-park_16728462213_o.jpg"/>
                    <Park parkName="Chastain Park" parkLocation = "4001 Powers Ferry Rd NW, Atlanta, GA 30342" parkLink = "https://www.chastainpark.org/" parkImage = "https://e1.nmcdn.io/treesatl/wp-content/uploads/2014/05/Chastain-Park-2.jpg/v:1-width:1200-height:630-fit:cover/Chastain-Park-2.jpg?signature=a46569fa"/>
                </tr>
                <tr>
                    <Park parkName="Freedom Park" parkLocation = "Moreland Ave NE, Atlanta, GA 30307" parkLink = "https://www.freedompark.org/" parkImage = "https://www.archpaper.com/wp-content/uploads/2020/07/freedompark_c-mattwilder-1.jpg"/>
                    <Park parkName="Candler Park" parkLocation = "585 Candler Park Dr NE, Atlanta, GA 30307" parkLink = "https://candlerpark.org/" parkImage = "https://onthegrid.city/imager/s3_amazonaws_com/onthegrid.city/assets/grid/atlanta/candler-park-little-five-points/candler-park/CP3_play_299006722e285f47655d17d1c9136337.jpg"/>
                </tr>
                <tr>
                    <Park parkName="Westside Reservoir Park" parkLocation = "1660 Johnson Rd NW, Atlanta, GA 30318" parkLink = "https://beltline.org/parks-trails/westside-park/" parkImage = "https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2021/10/westsidereservoirpark07_quarry.jpg"/>
                    <Park parkName="Blue Heron Nature" parkLocation = "4055 Roswell Rd NE, Atlanta, GA 30342" parkLink = "https://bhnp.org/" parkImage = "https://www.alltrails.com/_next/image?url=https%3A%2F%2Fimages.alltrails.com%2FeyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzU5NjQwODQvOTM1ZDZiOTA0NTYwNDhiN2EzNTg5NGFmNDAzOWQwNTIuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDgwLCJoZWlnaHQiOjcwMCwiZml0IjoiY292ZXIifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0%3D&w=3840&q=90"/>
                </tr>
            </tbody>
        </table>
      
    </div>
  )
}

export default Grid
//             /\ 
              //\\
             //--\\
            //----\\
           //------\\
          //---/\---\\
         //---/||\---\\
//       \\---\||/---//
//        \\---\/---//
//         \\------//
//          \\----//
//           \\--//
//            \\//
//             \/
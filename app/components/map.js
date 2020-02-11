import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

const MAPBOX_API='https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';
export default class MapComponent extends Component {
	variables='';
	
  get src() {
 	let {lng, lat , width , height ,zoom} = this.args;
 	let cordinates = `${lng},${lat},${zoom}`;
 	let dimensions = `${width}x${height}`
 	let accessToken = `access_token=${this.token}`;
 	this.variables=this.args;
 	//this.source=`${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
 	//return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`
 	//return 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/{{@lng}},{{@lat}},{{@zoom}}/{{@width}}x{{@height}}@2x?access_token={{this.token}};
 	return "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/"+lng+","+lat+","+zoom+"/"+width+"x"+height+"@2x?access_token="+encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
 }
  
  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
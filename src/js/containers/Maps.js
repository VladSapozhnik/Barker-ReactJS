import GoogleMapReact from 'google-map-react';
import icon from "../../images/Map_icon.svg";
const Maps = () => {
    const Marker = ({ text }) => <img src={icon} style={{width: '60px', height: '75px'}} alt="Marker" />;

    const defaultProps = {
        center: {
            lat: 49.84874330666604,
            lng: 24.02734682923906
        },
        zoom: 13
    };

    // const handleApiLoaded = (map, maps) => {
    //     console.log(map, maps)
    //     // use map and maps objects
    // };
    return (
        <>
            <div className="maps">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCpH5wELSQzDiT_Snv_ClnmbaPsUpzhSXk" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}

                    // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    <Marker
                        lat={49.84874330666604}
                        lng={24.02734682923906}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </>
    )
}

export default Maps;
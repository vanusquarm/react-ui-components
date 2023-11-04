/**
 * Created by sylvan quarm on 6/26/2023.
 * https://github.com/vanusquarm/react-ui-components
 */
export default function TabBody({tabId}){
  // Using the first approach
  const cities = [
    {"id":1,"name":"London","details":"London is the capital tab of England."},
    {"id":2,"name":"Paris","details":"Paris is the capital tab of France."},
    {"id":3,"name":"Tokyo","details":"Tokyo is the capital tab of Japan."}
  ]
  let tab = cities.filter(tab => tab.id === tabId)[0]; 
  console.log(tab)

  return(
    <div>
        <h3>{tab.name}</h3>
        <p>{tab.details}</p>
    </div>
  );

}

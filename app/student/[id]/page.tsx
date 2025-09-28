export default function Page({params}:{ params: { id: string } }) {

    const {id} = params;

  return (
    <>
     <h1>student Id : {id} </h1> 
     <hr />
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia error modi ex placeat iure dolores tenetur fugiat expedita, magnam non.</p>
    </>
  );
}
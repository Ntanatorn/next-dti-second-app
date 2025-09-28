export default async function Page({params}:{ params:Promise< { id: string }> }) {

    const {id} = await params;

  return (
    <>
     <h1>student Id : {id} </h1> 
     <hr />
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia error modi ex placeat iure dolores tenetur fugiat expedita, magnam non.</p>
    </>
  );
}
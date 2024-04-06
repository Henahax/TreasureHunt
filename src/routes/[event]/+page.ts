export async function load({ params }) {
    let data = undefined;
    try{
        data = await import(`../../events/${params.event}/event.json`);
        return data.default;
    }catch(error){
        return data;
    }
  }
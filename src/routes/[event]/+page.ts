export async function load({ params }) {
    let data = undefined;
    try{
        console.log(`../../events/${params.event}/event.json`)
        data = await import(`../../events/${params.event}/event.json`);
        return data.default;
    }catch(error){
        return data;
    }
  }
import {Router} from "wpe-lightning-sdk";

export default () => {

    Router.boot(async()=> {
        // this will always be called
        console.log('Router boot')
    });

    // Router.before("home/browse/movies", async ({page})=>{
    //     page.data = await getPopular('movie');;
    // }, 10 * 60 /* expires */);
}
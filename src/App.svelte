<script>
  import { Route, Router} from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Checkout from "./routes/Checkout.svelte";
  import Details from "./routes/Details.svelte";
  import Scaffold from "./lib/Scaffold.svelte";
</script>

<Router>
  <Route path={"/"} component={Home}/>
  <Route path={"/checkout"} component={Checkout}/>
  <Route path={"/nav"} component={Scaffold}/>
  <Route path={"/details/:slug"} let:params >
    <Details slug={params.slug}/>
  </Route>
</Router>

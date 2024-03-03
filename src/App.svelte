<script>
  import { Route, Router} from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Checkout from "./routes/Checkout.svelte";
  import Details from "./routes/Details.svelte";
</script>

<Router>
  <Route path={"/"} component={Home}/>
  <Route path={"/checkout"} component={Checkout}/>
  <Route path={"/details/:slug"} let:params >
    <Details slug={params.slug}/>
  </Route>
</Router>

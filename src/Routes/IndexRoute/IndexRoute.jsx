import FormCreateTask from "/src/components/forms/formCreateTask/FormCreateTask";
import cl from "./IndexRoute.module.scss";

function IndexRoute() {
  return (
    <div className={cl.indexRoute}>
      <FormCreateTask />
    </div>
  );
}

export default IndexRoute;

import { Header } from '../Header';
import { ToDoForm } from '../ToDoForm';
import { ToDoList } from '../ToDoList';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <ToDoForm />
      <ToDoList />
    </>
  );
};

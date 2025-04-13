import { Admin, Resource } from 'react-admin';
import { Layout } from './Layout';
import simpleRestProvider from 'ra-data-simple-rest';
import { UserCreate, UserList, UserEdit } from './UserResource';

// Criando um dataProvider customizado para garantir que a resposta tenha o id correto
const customDataProvider = (apiUrl: string) => {
  const restProvider = simpleRestProvider(apiUrl);

  return {
    ...restProvider,
    create: (resource: string, params: any) => {
      return restProvider.create(resource, params).then(({ data }) => {
        // Certifique-se de que a resposta tenha a chave 'data' e o 'id'
        if (data && !data.id) {
          console.error("A resposta não contém o id do novo usuário!");
          // Aqui você pode realizar algum ajuste, ou garantir que o id seja retornado pelo backend
        }
        return { data };  // Retorna a resposta formatada corretamente
      });
    },
  };
};

// Substitua pela URL do seu servidor backend
const dataProvider = customDataProvider('http://192.168.0.25:3000');

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit}/>
  </Admin>
);



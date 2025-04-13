import { useNotify, useRedirect, Create, Datagrid, List, PasswordInput, TextField, TextInput, SimpleForm, Edit } from "react-admin";

export const UserList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
        </Datagrid>
    </List>
);

export const UserCreate = () => {
    const notify = useNotify();
    const redirect = useRedirect();

    const handleSuccess = () => {
        notify('Registro criado com sucesso!');
        redirect('/users'); // Redireciona para a página inicial
    };

    return (
        <Create mutationOptions={{ onSuccess: handleSuccess }}>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="email" />
                <PasswordInput source="password" />
            </SimpleForm>
        </Create>
    );
};

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <PasswordInput source="password" />
        </SimpleForm>
    </Edit>
);
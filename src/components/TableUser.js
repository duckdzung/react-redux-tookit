import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllUsers } from '../redux/slices/userSlice';

const TableUser = () => {
    const dispatch = useDispatch();

    const users = useSelector(state => state.user.users);
    const loading = useSelector(state => state.user.loading);
    const error = useSelector(state => state.user.error);
    const errorMessage = useSelector(state => state.user.errorMessage);

    useEffect(() => {
        dispatch(fetchAllUsers());
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {error ?
                <>
                    <p>Something wrongs, please try again ....</p>
                    <p>Error message: {errorMessage}</p>
                </>
                :
                <>
                    {loading ?
                        <>
                            <p>Loading ....</p>
                        </>
                        :
                        <>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Email</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users && users.length > 0 && users.map((user, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{user.email}</td>
                                            <td>{user.username}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </>
                    }
                </>
            }
        </>
    );
}

export default TableUser;
import api from './config'
import { toast } from 'react-toastify';

export async function serviceLogin({ email, password }) {
    if (email && password) {
        const { status } = await api.post('/users', { email: email, password: password, nome: 'Usuário autorizado' })
        if (status === 201) {
            toast.success("Seja bem-vindo!");
            return true
        }
    }
    toast.warn("Por favor preencha todos os campos!");
    return false
}
import { Link, Box } from '@mui/material'
import NextLink from 'next/link';
import {
    CabecalhoContainer,
    Logo,
    LinksContainer
} from './CabecalhoAdmin.style'

export default function CabecalhoAdmin(){
    return (
        <CabecalhoContainer>
            <div>
                <Logo src ={'/imagens/logo.svg'} alt={'Adote um Pet'} />
                <LinksContainer>
                    <Link component={NextLink} href={'/pets/cadastro'}>
                        Cadastrar Pet
                    </Link>
                    <Link component={NextLink} href={'/pets/relatorio'}>
                        Relatório{' '}
                        <Box
                            component={'span'}
                            sx={{display: { sm: 'initial', xs: 'none'}}}
                        >
                            de Adoção
                        </Box>
                    </Link>
                </LinksContainer>
            </div>
        </CabecalhoContainer>
    )
}
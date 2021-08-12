import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../components/copyright';
import { getPosts } from '../services/service-posts';
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  titlePost: {
    width: '65%',
    marginLeft: theme.spacing(30),
    marginTop: theme.spacing(5),
  },
  textPost: {
    width: '65%',
    marginLeft: theme.spacing(30),
    marginTop: theme.spacing(1),
  },
  buttonPost: {
    float: 'center',
    margin: theme.spacing(3, 0, 2),
    marginLeft: theme.spacing(80)
  },

}));

export default function Home() {
  const classes = useStyles();

  const [posts, setPosts] = useState();

  useEffect(() => {// passo uma função/script para ser executado antes do render
    getPosts()
      .then(data => {
        // implementar setPost passando o valor data || setar no estado o valor da promessa        
        setPosts(data);
      })
  }, []) // o momento que eu quero que o useEffect seja executado

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Minha Rede Social
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <TextField
          className={classes.titlePost} noValidate autoComplete="off"
          label="Título"
          variant="outlined"
          required
          margin="normal"
        />
        <TextField
          className={classes.textPost} noValidate autoComplete="off"
          label="O que vai postar?"
          required
          multiline
          rows={4}
          variant="outlined"
        />
        <Button className={classes.buttonPost}
          onClick={() => console.log('')}
          type="submit"
          variant="contained"
          color="secondary">
          POSTAR
        </Button>
      </div>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {posts && posts.map((post) => (
              <Grid item key={post.id} xs={12} sm={12} md={12}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography
                      dangerouslySetInnerHTML={{ __html: post.description }}>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Deletar
                    </Button>
                    <Button size="small" color="primary">
                      Editar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Minha Rede Social
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
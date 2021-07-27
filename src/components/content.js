import React, { useState } from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import Card from './card';
import Modal from './modal';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import graphql from 'babel-plugin-relay/macro';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  footer: {
    height: 40,
    width: 912,
    background: '#ffffff',
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const RepositoryNameQuery = graphql`
    query contentQuery($page: Int!) {
        episodes(page: $page) {
            info {
                count,
                pages,
                next,
                prev,
            },
            results {
                name,
                air_date,
                characters {
                    name
                },
                episode,
                id,
            }
        }
    }
`;

export default function Content() {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [modalData, setModalData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const modalOpenClick = (data) => {
    setModalData(data);
    setModalOpen(true);
  }

  const response = useLazyLoadQuery(RepositoryNameQuery, { page });
  const cards = response?.episodes.results.map((episode) => {
    return <Card key={episode.id} onModalOpen={() => modalOpenClick(episode)} episode={episode}/>
  });
  const pagesCount = response?.episodes.info.pages;

  const handleChange = (event, page) => {
    setPage(page);
  }
  return (
    <div className="App">
      <Container maxWidth="md">
        <div className={classes.wrapper}>
          { cards }
        </div>
        <div className={classes.footer}>
          <Pagination count={pagesCount} page={page} onChange={handleChange} />
        </div>
      </Container>
      <Modal state={modalOpen} setModalState={setModalOpen} modalData={modalData}/>
    </div>
  );
}

import PropTypes from 'prop-types'; // import PropTypes
import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import PeopleCard from './PeopleCard';

const PeopleSection = ({ title, peopleData }) => {
  const [peopleCards, setPeopleCards] = useState([]);

  const determineGridColumns = (count) => {
    if (count < 5 && count !== 2) {
      return `repeat(${count}, minmax(17rem, 1fr))`;
    } else if (count === 2) {
      return 'repeat(2, 1fr)';
    }
    return 'repeat(auto-fill, minmax(17rem, 1fr))';
  };

  const gridColumns = determineGridColumns(peopleData?.length || 0);

  useEffect(() => {
    if (peopleData && peopleData.length > 0) {
      const cards = peopleData.map((data) => (
        <PeopleCard
          key={data.name}
          name={data.name}
          title={data.title}
          description={data.description}
          fileName={data.fileName}
        />
      ));
      setPeopleCards(cards);
    }
  }, [peopleData]);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '5rem',
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: '2rem' }}>
        {title}
      </Typography>

      <Box
        className={`people-grid ${peopleData?.length === 2 ? 'two-items' : ''}`}
        sx={{
          display: 'grid',
          gridTemplateColumns: gridColumns,
          gridGap: '30px',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {peopleCards}
      </Box>
    </Container>
  );
};

PeopleSection.propTypes = {
  title: PropTypes.string.isRequired,
  peopleData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    fileName: PropTypes.string,
  })).isRequired,
};

export default PeopleSection;

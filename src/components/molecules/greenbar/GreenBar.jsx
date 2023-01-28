import Box from '../../atoms/box/Box';
import Typography from '../../atoms/typography/Typography';
import * as S from './styled';

export default function GreenBar(...props) {
  return (
    <div style={{ zIndex: 5 }}>
      <S.GreenContainer>

        <Box padding="10px" height="198px" bg="rgba(33, 170, 133, 1)" justify="center" align="center" direction="column">
          <Typography fontWeight="600" color="white" text="6000" fontSize="48px" justify="center" />
          <Typography textAlign="center" fontWeight="bold" color="white" text="pessoas impactadas" fontSize="25px" justify="center" />
          <Typography textAlign="center" fontWeight="bold" color="white" text="no último ano" fontSize="25px" justify="center" />
        </Box>

        <Box padding="20px" height="198px" bg="rgba(24, 202, 153, 1)" justify="center" align="center" direction="column">
          <Typography fontWeight="600" color="white" text="5000" fontSize="48px" justify="center" />
          <Typography
            textAlign="center"
            fontWeight="bold"
            color="white"
            text="avaliações do
"
            fontSize="25px"
            justify="center"
          />
          <Typography textAlign="center" fontWeight="bold" color="white" text="programa em 2021" fontSize="25px" justify="center" />
        </Box>

        <Box padding="20px" height="198px" bg="rgba(15, 224, 170, 1)" justify="center" align="center" direction="column">
          <Typography fontWeight="600" color="white" text="150" fontSize="48px" justify="center" />
          <Typography textAlign="center" fontWeight="bold" color="white" text="voluntários ativos" fontSize="25px" justify="center" />
          <Typography textAlign="center" fontWeight="bold" color="white" text="atualmente" fontSize="25px" justify="center" />
        </Box>

      </S.GreenContainer>
    </div>
  );
}

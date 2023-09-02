
import { IconChevronCircleUp, IconHelp } from '../../shared/Icons';
import ContentTable from './ContentTable/ContentTable';
import HeaderTable from './HeaderTable/HeaderTable';
import TotalTable from './TotalTable/TotalTable';
import {StyledCallProcessingQuality, Title} from './styles';

const data = [
  {
    calls: '800',
    recognized: '90',
    byScript: '72',
    conversion: '74%',
    привествие: true,
  },
  {
    calls: '800',
    recognized: '90',
    byScript: '72',
    conversion: '74%',
    привествие: true,
  },
  {
    calls: '800',
    recognized: '90',
    byScript: '72',
    conversion: '84%',
    привествие: true,
  },
];

function CallProcessingQuality() {
  return (
    <StyledCallProcessingQuality>
      <IconHelp/>
      <IconChevronCircleUp/>
      <Title>Качество обработки новых звонков</Title>
      <table style={{borderCollapse: 'collapse'}}>
        <HeaderTable data={data} />
        <TotalTable data={data[0]} />
        {data
          ? data.map((el) => {
              return <ContentTable data={el} />;
            })
          : false}
      </table>
    </StyledCallProcessingQuality>
  );
}

export default CallProcessingQuality;

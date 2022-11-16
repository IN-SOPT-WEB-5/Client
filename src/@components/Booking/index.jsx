import styled from 'styled-components';

import Calendar from './Calendar';
import QuickReserveArea from './QuickReserveArea';

export default function Booking() {
  return (
    <St.Root>
      <St.Title></St.Title>
      <St.SubTitleWrapper>
        <St.SubTitle></St.SubTitle>
        <St.Date></St.Date>
      </St.SubTitleWrapper>
      <Calendar />
      <QuickReserveArea />
    </St.Root>
  );
}

const St = {
  Root: styled.div``,
  Title: styled.h1``,
  SubTitleWrapper: styled.section``,
  SubTitle: styled.h2``,
  Date: styled.h3``,
};

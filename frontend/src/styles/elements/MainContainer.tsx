import styled from "styled-components";

export const MainContainer = styled.main`
  background: ${(props) => props.theme.colors.white};
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 0;

  @media ${(props) => props.theme.mq.overTabletPortrait} {
    .bg-grey {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      height: 250px;
      width: 100%;
      background-color: ${(props) => props.theme.colors.lightGrey};
    }

    .bg-stripes {
      position: absolute;
      top: 40px;
      left: 0;
      z-index: -1;
      width: 110%;
      margin-left: -30px;
      transform: rotate(-12deg) skew(-12deg);
      background-color: ${(props) => props.theme.colors.lightGrey};
      display: grid;
      grid-template-columns: 1fr repeat(16, 80px) 1fr;
      grid-template-rows: repeat(7, 60px);

      .bg-stripe1 {
        grid-column: 1 / 1;
        grid-row: 5 / 5;
        background-color: rgb(33, 45, 99);
      }

      .bg-stripe2 {
        grid-column: 1 / 4;
        grid-row: 6 / 6;
        background-color: rgb(84, 105, 212);
      }

      .bg-stripe3 {
        grid-column: 4 / 6;
        grid-row: 7 / 7;
        background-color: rgb(227, 232, 238);
      }

      .bg-stripe4 {
        grid-column: 2 / 5;
        grid-row: 3 / 3;
        border: 2px solid rgb(227, 232, 238);
      }

      .bg-stripe5 {
        grid-column: 14 / 17;
        grid-row: 4 / 4;
        border: 2px solid rgb(227, 232, 238);
      }

      .bg-stripe6 {
        grid-column: 14 / end;
        grid-row: 2 / 2;
        background-color: rgb(84, 105, 212);
      }

      .bg-stripe7 {
        grid-column: 15 / end;
        grid-row: 1 / 1;
        background-color: rgb(127, 211, 237);
      }

      .bg-stripe8 {
        grid-column: 17 / end;
        grid-row: 3 / 3;
        background-color: rgb(227, 232, 238);
      }
    }
  }
`;

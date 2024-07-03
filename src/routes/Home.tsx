import styled from "styled-components";
import Title from "../components/home/Title";
import Main from "../components/home/Main";
import Feedback from "../components/home/Feedback";
import { useEffect, useRef } from 'react';

export default function Home(){
    const Wrapper = styled.div`
        width: 100%;
        height: 100%;
        display: block;
    `;

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting) {
            alert('테스트');
          }
        }, { threshold: 0.01 });
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return(
        <Wrapper>
            <Title/>
            <Main/>
            <Feedback ref={ref}/>
        </Wrapper>
    );
}
import React from 'react';

// Types
import { AnswerObject } from '../App';

// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswers: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ 
    question, 
    answers, 
    callback, 
    userAnswers, 
    questionNr, 
    totalQuestions 
}) => (
    <Wrapper>
        <p className="number">
            Question: { questionNr } / { totalQuestions }
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            { answers && answers.map((answer, index) => (
                <ButtonWrapper 
                    key={ index }
                    correct={ userAnswers?.correctAnswer === answer }
                    userClicked={ userAnswers?.answer === answer }
                >
                    <button disabled={ !!userAnswers } value={ answer } onClick={ callback }>
                        { answer }
                    </button>
                </ButtonWrapper>   
            ))
            }
        </div>
    </Wrapper>
);

export default QuestionCard;
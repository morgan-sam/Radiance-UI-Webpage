import React, { useState } from "react"
import {
  ImmersiveModal,
  Button,
  OptionButton,
  RadioButton,
  Checkbox,
} from "radiance-ui"
import { ThumbsUpIcon, MinusIcon, ThumbsDownIcon } from "radiance-ui/lib/icons"
import { lorem } from "../js/lorem"
import { css } from "@emotion/core"
import "../css/survey.css"

const modalHeaderImage =
  "https://images.unsplash.com/photo-1556228852-80b6e5eeff06?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"

const makeupItems = [
  "Primer",
  "Foundation",
  "BB Cream",
  "Concealer",
  "Blush",
  "Highlighter",
  "Bronzer",
  "Setting Spray",
]

const Survey = props => {
  const [data, setData] = useState({
    acne: undefined,
    length: undefined,
    makeup: [],
    previous: undefined,
    previousResult: undefined,
  })
  const { surveyOpen, setSurveyOpen } = props

  return (
    <ImmersiveModal
      onClose={() => setSurveyOpen(false)}
      headerImage={<img src={modalHeaderImage} alt="header" />}
      footerContent={
        <Button.Container>
          <Button>Submit</Button>
        </Button.Container>
      }
      title="Curology Survey"
    >
      <p>
        Thank you for taking our survey. It will take approximately 2-3 minutes.
      </p>
      <p>Question 1{data.acne === true ? "A" : null}:</p>
      <p>Are you currently struggling with acne?</p>
      <RadioButton
        type="primary"
        checked={data.acne === true}
        css={css`
          & > p:last-of-type {
            margin-bottom: 0;
          }
        `}
        onClick={() => setData({ ...data, acne: true })}
      >
        Yes
      </RadioButton>
      <RadioButton
        type="primary"
        checked={data.acne === false}
        css={css`
          & > p:last-of-type {
            margin-bottom: 0;
          }
        `}
        onClick={() => setData({ ...data, acne: false })}
      >
        No
      </RadioButton>
      {data.acne === true && [
        <p>Question 1B:</p>,
        <p>How long have you had acne for?</p>,
        <RadioButton
          type="primary"
          checked={data.length === 1}
          css={css`
            & > p:last-of-type {
              margin-bottom: 0;
            }
          `}
          onClick={() => setData({ ...data, length: 1 })}
        >
          Under 3 Months
        </RadioButton>,
        <RadioButton
          type="primary"
          checked={data.length === 2}
          css={css`
            & > p:last-of-type {
              margin-bottom: 0;
            }
          `}
          onClick={() => setData({ ...data, length: 2 })}
        >
          3 - 12 Months
        </RadioButton>,
        <RadioButton
          type="primary"
          checked={data.length === 3}
          css={css`
            & > p:last-of-type {
              margin-bottom: 0;
            }
          `}
          onClick={() => setData({ ...data, length: 3 })}
        >
          1 - 2 years
        </RadioButton>,
        <RadioButton
          type="primary"
          checked={data.length === 4}
          css={css`
            & > p:last-of-type {
              margin-bottom: 0;
            }
          `}
          onClick={() => setData({ ...data, length: 4 })}
        >
          2+ years
        </RadioButton>,
      ]}
      <p>Question 2:</p>
      <p>Please select the makeup items you use in your daily routine:</p>
      <div className="makeup-option-container">
        {makeupItems.map(option => (
          <div className="makeup-option">
            <span key={`label_${option}`} className="makeup-item-label">
              {option}
            </span>
            <Checkbox
              key={`checkbox_${option}`}
              type="primary"
              style={{ marginBottom: "0" }}
              checked={data.makeup.includes(option)}
              onClick={() => {
                if (data.makeup.includes(option)) {
                  const filteredList = data.makeup.filter(el => el !== option)
                  setData({ ...data, makeup: filteredList })
                } else setData({ ...data, makeup: [...data.makeup, option] })
              }}
            />
          </div>
        ))}
      </div>
      <p>Question 3{data.previous ? "A" : null}:</p>
      <p>Have you previously had any skincare treatment?</p>
      <RadioButton
        type="primary"
        checked={data.previous === true}
        css={css`
          & > p:last-of-type {
            margin-bottom: 0;
          }
        `}
        onClick={() => setData({ ...data, previous: true })}
      >
        Yes
      </RadioButton>
      <RadioButton
        type="primary"
        checked={data.previous === false}
        css={css`
          & > p:last-of-type {
            margin-bottom: 0;
          }
        `}
        onClick={() => setData({ ...data, previous: false })}
      >
        No
      </RadioButton>
      {data.previous && [
        <p>Question 3B:</p>,
        <p>Did your symptoms improve or worsen?</p>,
        <OptionButton
          selected={data.previousResult === "improvement"}
          text="Symptoms Improved"
          subtext="Reduction in acne, redness, zits, clogged pores, etc."
          onClick={() => setData({ ...data, previousResult: "improvement" })}
          optionType="radio"
          buttonType="primary"
          icon={<ThumbsUpIcon />}
        />,
        <OptionButton
          selected={data.previousResult === "no change"}
          text="No Change"
          subtext="No change in amount of acne, redness, zits, clogged pores, etc."
          onClick={() => setData({ ...data, previousResult: "no change" })}
          optionType="radio"
          buttonType="primary"
          icon={<MinusIcon />}
        />,
        <OptionButton
          selected={data.previousResult === "worsened"}
          text="Symptoms Worsened"
          subtext="Increase in acne, redness, zits, clogged pores, etc."
          onClick={() => setData({ ...data, previousResult: "worsened" })}
          optionType="radio"
          buttonType="primary"
          icon={<ThumbsDownIcon />}
        />,
      ]}
      <p>Question 4:</p>
      <p>{lorem(10)}?</p>
      <p>Question 5:</p>
      <p>{lorem(10)}?</p>
    </ImmersiveModal>
  )
}

export default Survey

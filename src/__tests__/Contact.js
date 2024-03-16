import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../components/Contact";

/* contact was a simple page  */

describe('Contact us page test cases', () => {
        test("should load contact us component", ()=>{
        //we will render it and check if it loads or not.
        
          render(<Contact/>);
        
          //check if heading is present.
          const heading = screen.getByRole("heading");
        
          expect(heading).toBeInTheDocument(); 
          /*
            I am rendering my contact component over js dom and checking if heading present.
            now, toBeInTheDocument is not a function error we get.we have to install one more library for that.
          */
        });
        
        test("should load submit button inside Contact component", ()=>{
            //we will render it and check if it loads or not.
            
              render(<Contact/>);
            
              //check if submit button is present.We can do by text or by role.
               // const button = screen.getByRole("button");  
              // expect(button).toBeInTheDocument(); 
        
            const button = screen.getByText("Submit");
            expect(button).toBeInTheDocument(); 
              /*
                I am rendering my contact component over js dom and checking if button is present.
              */
        });
        
        test("should load input name inside Contact component", ()=>{
            
             render(<Contact/>);
            
             const input = screen.getByPlaceholderText("name");
             expect(input).toBeInTheDocument(); 
        
        });
        
        test("should load 2 input boxes inside Contact component", ()=>{
            
            render(<Contact/>);
           
            const inputBoxes = screen.getAllByRole("textbox");
            expect(inputBoxes.length).toBe(2); 
        
        });
})



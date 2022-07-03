import React from "react";
import Code from "./Code";
import PostTemplate from "./PostTemplate";
var dedent = require('dedent-js');


function Post3(){

    let title = "std::bind";
    let date = "07/2/2022";

    let code1 = dedent(`auto fcn = [](int a, int b){return a + b;};`);
    let code2 = dedent(

    `#include <functional>
    #include <iostream>
    auto fcn = [](int a, int b){return a + b;};
    auto fcn_binder = std::bind(fcn, std::placeholders::_1, 10);
    std::cout << std::cout << fcn_binder(1) << std::endl; // 10+1 = 11
    `
    );

    let code3 = dedent(`auto fcn = [](int a){return a + 10;};`);

    let code4 = dedent(
        `
        std::vector<int> vec1 = {1,2,3,4,5};
        std::vector<int> vec2;
        // we want vec2 = {10,20,30,40,50}
        `
    );

    let code5 = dedent(
        `
        std::transform(vec1.begin(), vec1.end(), 
        std::back_inserter(vec2),
        [](int a){return a*10;};
        );
        `
    );
    let code6 = dedent(
        `
        std::transform(vec1.begin(), vec1.end(), 
        std::back_inserter(vec2),
        std::bind(multiplies<int>(), std::placeholders::_1, 10));
        );
        `
    );

    let code7 = dedent(
        `
        class Shapes{
            Shapes() = default;
            inline static void add(int a, int b){
                return ((a << 1) >> b) ^ a;
            }
        };
        `
    );

    let code8 = dedent(
        `
        std::for_each(vec1.begin(), vec2.end(),
        std::bind(&Shapes::add, std::placeholders::_1, 10);   // Shapes::add(a,10); 
        `
    );

    let content = 
    (<div id="typed-font">
    Binders are special function adapters, that are mainly used to combine predefined function objects with custom values. Let's say you have
    a <code>lambda </code> defined as follows that sums two numbers:
    <Code code={code1} language="cpp" /> <br />
    Now I am sure everyone is familiar with <code>lambda </code> functions but what really sets <code>std::bind </code>
    apart is the endless amount of customization you can do with a pre-defined <code>lambda </code>. For example, let's say 
    now instead of adding two numbers together you want to add <code>10</code> to the input number. I know there are 100 of ways to do that
    but I want to introduce <code>std::bind </code> with a really simple example. One option is to rewrite the <code>lambda </code> as:
   
    <Code code={code3} language="cpp" /> <br></br>
    This is a legitimate and valid way to achieve the result. Now let's see how <code>std::bind </code> can help us without rewriting the
    whole <code>lambda </code> again. Let's define a binder as:

    <Code code={code2} language="cpp" />

    We can see that now we can achieve the same result without redefining the <code>lambda </code> function. Now this may seem
    more work than defining a <code>lambda </code> but it saves so much time and effort for <code>lambdas </code> that are huge. 
    This approach also works for normal functions and even function objects. 

    Let's see it in action in STL. Let's say we have two <code>std::vector</code>'s <code>vec1</code> and <code>vec2</code> respectively and 
    we want to copy all elements of vec1 into vec2 and multiply each element by 10:
    <Code code={code4} language="cpp" />
    <br></br>
    The straightforward way to do it is to define a <code>lambda</code> and pass it to std::transform as follows:
    <Code code={code5} language="cpp" />
    <br></br>
    The <em>smarter</em> way is to use <code>std::bind</code> as:
    <Code code={code6} language="cpp" />
    <br></br>
    <h3>Another use of std::bind</h3>
    <code>std::bind</code> can also be used on function pointers. Assume you have a <code>class Shapes</code> as follows:
    <Code code={code7} language="cpp"></Code>
    You can observe there is an <code>add</code> function that does a crazy operation that we don't need to worry about at the moment. 
    Let's say that this <code>add</code> function does some super cool calculations and we want to use it in one of the STL
    algorithms.  We can use it to our advantage as follows:
    <Code code={code8} language="cpp"></Code>
    Note: Here we have made the second argument to the function <code>add</code> to be a constant = 10. 
    <br>
    </br>
    I hope you learnt something form this post. For more information please checkout <code>std::bind</code> on <a href="https://en.cppreference.com/w/cpp/utility/functional/bind">cppreference</a>
    </div>

    );


    return (<div>
        <React.StrictMode>
            {<PostTemplate title={title} content={content} date={date} />}
        </React.StrictMode>
    </div>
    )
}

export default Post3
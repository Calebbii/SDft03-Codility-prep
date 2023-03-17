# SDft03-Kodility-prep




## BDD
```
 Feature: Find the shortest word in an array

   Scenario: Array contains multiple words
     Given an array of strings
       | word1 | word2 | word3 |
       | apple | pear  | banana|
     When the shortest word is found
    Then the result should be "pear"
```

## Pseudocode

```
   BEGIN
     SET shortestWord to null
     FOR each word in the array
         IF shortestWord is null or the current word is shorter than shortestWord
             SET shortestWord to the current word
         END IF
     END FOR
     RETURN shortestWord
   END
```

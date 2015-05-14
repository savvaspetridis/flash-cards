app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) 
{

    $scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
    ];

    $scope.loaded = false;

    FlashCardsFactory.getFlashCards().then(function (data) 
    {
        $scope.loaded = true;
        $scope.flashCards = data;
    });

    $scope.getCategoryCards = function (category) 
    {
        $scope.currentCategory = category;
        $scope.loaded = false;
        FlashCardsFactory.getFlashCards(category).then(function (data) {
            $scope.loaded = true;
            $scope.flashCards = data;
        });
    }

    $scope.answerQuestion = function (answer, flashCard) 
    {
        if (!flashCard.answered) 
        {
            flashCard.answered = true;
            flashCard.answeredCorrectly = answer.correct;
            if (answer.correct)
            {
                ScoreFactory.correct = ScoreFactory.correct + 1;
            } 
            else
            {   
                ScoreFactory.incorrect = ScoreFactory.incorrect + 1;
            } 
        }
    }
});
app.factory('FlashCardsFactory', function ($http) {
    return {
        getFlashCards: function (category) {
            if(category)
            {
                return $http.get('/cards', {params: {category: category}}).then(function (response) { return response.data });
            }
            return $http.get('/cards').then(function (response) { return response.data }); 
        }
    };
});